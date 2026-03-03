import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { X, File, Folder, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CodeViewer.module.css';

interface FileNode {
    name: string;
    path: string;
    type: 'file' | 'dir';
    url: string;
}

interface CodeViewerProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
}

interface ApiErrorPayload {
    error?: string;
    details?: unknown;
    githubStatus?: number;
    requestPath?: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ isOpen, onClose, projectName }) => {
    const [files, setFiles] = useState<FileNode[]>([]);
    const [currentPath, setCurrentPath] = useState<string>('');
    const [fileContent, setFileContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            fetchDirectory('');
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const fetchDirectory = async (path: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await fetch(`/api/github?path=${encodeURIComponent(path)}`, {
                credentials: 'same-origin'
            });
            if (!res.ok) {
                const rawError = await res.text();
                let parsedError: ApiErrorPayload | { rawText: string } = { rawText: rawError };

                if (rawError) {
                    try {
                        parsedError = JSON.parse(rawError) as ApiErrorPayload;
                    } catch {
                        parsedError = { rawText: rawError };
                    }
                }

                console.error('Failed to fetch GitHub data from proxy API', {
                    httpStatus: res.status,
                    requestPath: path,
                    apiError: parsedError
                });
                throw new Error('Failed to fetch data');
            }
            const data = await res.json();

            if (Array.isArray(data)) {
                // It's a directory
                setFiles(data.sort((a, b) => {
                    if (a.type === b.type) return a.name.localeCompare(b.name);
                    return a.type === 'dir' ? -1 : 1; // Folders first
                }));
            } else if (data.type === 'file') {
                // It's a file
                const content = decodeBase64UTF8(data.content);
                setFileContent(content);
                setCurrentPath(data.path);
            }
        } catch {
            setError('リポジトリデータの読み込みに失敗しました。');
        } finally {
            setIsLoading(false);
        }
    };

    const handleFileClick = (node: FileNode) => {
        if (node.type === 'dir') {
            fetchDirectory(node.path);
        } else {
            fetchDirectory(node.path);
        }
    };

    const navigateBack = () => {
        const parts = currentPath.split('/');
        parts.pop(); // Remove current file/folder
        const parentPath = parts.join('/');
        setCurrentPath(parentPath);
        fetchDirectory(parentPath);
        setFileContent('');
    };

    // Prevent rendering if not open
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className={styles.overlay} onClick={onClose}>
                <motion.div
                    className={styles.modal}
                    onClick={e => e.stopPropagation()}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <div className={styles.header}>
                        <div className={styles.titleInfo}>
                            <h3 className={styles.title}>{projectName}</h3>
                            <span className={styles.subtitle}>リモートリポジトリ</span>
                        </div>
                        <button className={styles.closeButton} onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarHeader}>
                                {currentPath ? (
                                    <button onClick={navigateBack} className={styles.backButton}>
                                        ← 戻る
                                    </button>
                                ) : (
                                    <span className={styles.rootName}>school_diary</span>
                                )}
                            </div>

                            <div className={styles.fileList}>
                                {isLoading && !fileContent ? (
                                    <div className={styles.loader}><Loader2 className={styles.spin} size={20} /></div>
                                ) : (
                                    files.map(file => (
                                        <button
                                            key={file.path}
                                            className={`${styles.fileItem} ${currentPath === file.path ? styles.active : ''}`}
                                            onClick={() => handleFileClick(file)}
                                        >
                                            {file.type === 'dir' ? (
                                                <Folder size={16} className={styles.iconFolder} />
                                            ) : (
                                                <File size={16} className={styles.iconFile} />
                                            )}
                                            <span className={styles.fileName}>{file.name}</span>
                                        </button>
                                    ))
                                )}
                                {error && <div className={styles.error}>{error}</div>}
                            </div>
                        </div>

                        <div className={styles.mainPane}>
                            {isLoading && fileContent ? (
                                <div className={styles.centerLoader}><Loader2 className={styles.spin} size={30} /></div>
                            ) : fileContent ? (
                                <div className={styles.codeContainer}>
                                    <div className={styles.codeHeader}>{currentPath.split('/').pop()}</div>
                                    <SyntaxHighlighter
                                        language={getLanguageFromExtension(currentPath)}
                                        style={vs}
                                        customStyle={{ margin: 0, borderRadius: '0 0 8px 8px', overflowX: 'auto', height: '100%', fontSize: '14px' }}
                                        showLineNumbers={true}
                                    >
                                        {fileContent}
                                    </SyntaxHighlighter>
                                </div>
                            ) : (
                                <div className={styles.emptyState}>
                                    <File size={48} className={styles.emptyIcon} />
                                    <p>ファイルを選択してソースコードを表示</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

// Helper function to determine syntax highlighting language
function getLanguageFromExtension(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
        case 'js': case 'jsx': return 'javascript';
        case 'ts': case 'tsx': return 'typescript';
        case 'json': return 'json';
        case 'css': return 'css';
        case 'html': return 'html';
        case 'md': return 'markdown';
        case 'rb': return 'ruby';
        default: return 'javascript';
    }
}

// Helper function to decode UTF-8 Base64 properly
function decodeBase64UTF8(base64: string): string {
    try {
        const binString = atob(base64);
        const bytes = new Uint8Array(binString.length);
        for (let i = 0; i < binString.length; i++) {
            bytes[i] = binString.charCodeAt(i);
        }
        return new TextDecoder('utf-8').decode(bytes);
    } catch (e) {
        console.error('Failed to decode base64 content', e);
        return 'Error: Could not decode file content';
    }
}

export default CodeViewer;
