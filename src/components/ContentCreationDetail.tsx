/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Image as ImageIcon, Video as VideoIcon, Palette, Layers, Play, Pause, Maximize2, Minimize2, X, Loader2, Volume2, VolumeX } from 'lucide-react';

interface ContentCreationDetailProps {
  onBack: () => void;
}

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  title: string;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  items: MediaItem[];
}

const VideoPlayer = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!videoRef.current) return;
      
      if (e.code === 'Space' && document.activeElement !== videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
      if (e.code === 'Escape' && isFullscreen) {
        exitFullscreen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.play().catch(() => {});
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  useEffect(() => {
    const resetTimeout = () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      setShowControls(true);
      controlsTimeoutRef.current = window.setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    resetTimeout();
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleFullscreen = useCallback(async () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      await container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-neutral-900"
      onMouseMove={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        className="w-full h-full object-contain"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end items-center pb-4"
      >
        <button
          onClick={togglePlay}
          className="p-4 bg-[#CCFF00]/20 backdrop-blur-sm border border-[#CCFF00]/50 rounded-full text-[#CCFF00] hover:bg-[#CCFF00]/30 transition-all mb-4 cursor-none interactive-hover"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="p-2 text-neutral-300 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="p-2 text-neutral-300 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </motion.div>

      <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-lg">
        <p className="text-xs text-neutral-300 truncate max-w-[200px]">{title}</p>
      </div>
    </div>
  );
};

const ImageModal = ({ src, title, onClose }: { src: string; title: string; onClose: () => void }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-neutral-800 hover:bg-neutral-700 rounded-full text-white transition-colors cursor-none interactive-hover"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full"
      >
        <img
          src={src}
          alt={title}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <p className="text-center text-neutral-400 mt-4 text-sm">{title}</p>
      </motion.div>
    </motion.div>
  );
};

const LazyImage = ({ src, alt, onLoad, onError }: { src: string; alt: string; onLoad: () => void; onError: () => void }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = () => {
    setIsError(true);
    onError();
  };

  return (
    <div className="relative w-full h-full">
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse" />
      )}
      
      {isError && (
        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
          <div className="text-neutral-500 text-center">
            <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">图片加载失败</p>
          </div>
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${isError ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default function ContentCreationDetail({ onBack }: ContentCreationDetailProps) {
  const [activeSection, setActiveSection] = useState<string>('content');
  const [loadingItems, setLoadingItems] = useState<Set<string>>(new Set());
  const [loadedItems, setLoadedItems] = useState<Set<string>>(new Set());
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  const sections: Section[] = [
    {
      id: 'content',
      title: '内容运营',
      icon: <ImageIcon size={20} className="text-[#CCFF00]" />,
      description: '专注于新媒体平台内容策划与运营，涵盖小红书、抖音等主流平台的内容创作与数据优化，打造爆款内容矩阵。',
      items: [
        { type: 'image', src: '/content create/content/IMG_6373.jpg', title: '雀巢咖啡运营案例' },
        { type: 'image', src: '/content create/content/IMG_6374.jpg', title: '雀巢咖啡运营案例' },
        { type: 'image', src: '/content create/content/IMG_6840.jpg', title: 'MBTI运营内容' },
        { type: 'image', src: '/content create/content/IMG_6841.jpg', title: 'MBTI运营内容' },
      ],
    },
    {
      id: 'video',
      title: '视频拍摄与剪辑',
      icon: <VideoIcon size={20} className="text-[#CCFF00]" />,
      description: '具备专业的视频拍摄技巧与高级剪辑能力，熟练使用Premiere、剪映等工具，擅长叙事性强，特效氛围调色。',
      items: [
        { type: 'video', src: '/content create/videos/成都大学斯特灵学院师风师德宣传片.mp4', title: '成都大学斯特灵学院师风师德宣传片' },
        { type: 'video', src: '/content create/videos/运动与身份重建体育系列短片.mp4', title: '运动与身份重建体育系列短片' },
      ],
    },
    {
      id: 'poster',
      title: '海报设计',
      icon: <Palette size={20} className="text-[#CCFF00]" />,
      description: '视觉设计能力突出，涵盖商业海报、活动宣传物料设计，风格多元，从极简到华丽都能精准把握。',
      items: [
        { type: 'image', src: '/content create/design/poster/94c3ff14d62cb4085022edb19ba83459.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/b1048bcd36e61e6c92889cdcd68a3bcf.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3377.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3378.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3379.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3382.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3380.jpg', title: '海报设计作品' },
        { type: 'image', src: '/content create/design/poster/IMG_3381.jpg', title: '海报设计作品' },
      ],
    },
    {
      id: 'ui',
      title: 'UI设计',
      icon: <Layers size={20} className="text-[#CCFF00]" />,
      description: '用户界面设计，注重用户体验与视觉美感，从原型到界面设计的完整流程，具备产品思维与设计能力兼具。',
      items: [
        { type: 'image', src: '/content create/design/UI/1dbb38f3f7cccb29f01b44a1d6d4e1a7.png', title: 'UI设计作品' },
        { type: 'image', src: '/content create/design/UI/7cc3b95c8deec46fe271c197fb8f6d65.png', title: 'UI设计作品' },
        { type: 'image', src: '/content create/design/UI/8290f5b344b58231e6ae7c6c289f93fd.png', title: 'UI设计作品' },
        { type: 'image', src: '/content create/design/UI/632382bdc07e35de872ac107d0f6253a.png', title: 'UI设计作品' },
      ],
    },
  ];

  useEffect(() => {
    const currentSection = sections.find(s => s.id === activeSection);
    if (currentSection) {
      currentSection.items.forEach((item, index) => {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const newSet = new Set(prev);
            newSet.add(item.src);
            return newSet;
          });
        }, index * 100);
        return () => clearTimeout(timer);
      });
    }
  }, [activeSection]);

  const handleMediaLoad = (src: string) => {
    setLoadingItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
    setLoadedItems(prev => {
      const newSet = new Set(prev);
      newSet.add(src);
      return newSet;
    });
  };

  const handleMediaError = (src: string) => {
    setLoadingItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(src);
      return newSet;
    });
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-[#CCFF00] selection:text-black antialiased pt-24 pb-20">
      <div className="fixed inset-0 bg-[#050505] -z-20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] -z-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] md:bg-[size:64px_64px] -z-10 pointer-events-none opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-neutral-400 hover:text-[#CCFF00] transition-colors mb-8 sm:mb-12 cursor-none interactive-hover"
        >
          <ArrowLeft size={20} />
          <span className="font-mono text-sm tracking-wider">返回作品集</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse" />
            <span className="text-[#CCFF00] font-mono text-xs tracking-widest">内容创作</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-[#CCFF00]">内容创作</span>作品集
          </h1>
          <p className="text-neutral-400 mt-4 text-base sm:text-lg max-w-2xl">
            从内容运营、视频拍摄、海报设计到UI设计的完整作品合集
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 cursor-none interactive-hover ${
                  activeSection === section.id
                    ? 'bg-[#CCFF00] text-black font-bold shadow-lg shadow-[#CCFF00]/20'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-[#CCFF00]/50 hover:text-[#CCFF00]'
                }`}
              >
                {section.icon}
                <span className="text-sm sm:text-base">{section.title}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {currentSection && (
          <motion.p
            key={`desc-${currentSection.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-neutral-400 text-sm sm:text-base mb-8 max-w-3xl"
          >
            {currentSection.description}
          </motion.p>
        )}

        {currentSection && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`grid-${currentSection.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {currentSection.items.map((item, index) => {
                const isVisible = visibleItems.has(item.src);
                
                return (
                  <motion.div
                    key={`${item.src}-${index}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="group relative rounded-xl overflow-hidden bg-neutral-900/50 border border-neutral-800 hover:border-[#CCFF00]/30 transition-colors duration-300"
                  >
                    {loadingItems.has(item.src) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse flex items-center justify-center z-10">
                        <Loader2 size={32} className="text-[#CCFF00] animate-spin" />
                      </div>
                    )}

                    <div className="relative aspect-video overflow-hidden">
                      {item.type === 'image' ? (
                        <>
                          <div className="relative w-full h-full overflow-hidden">
                            <LazyImage
                              src={item.src}
                              alt={item.title}
                              onLoad={() => handleMediaLoad(item.src)}
                              onError={() => handleMediaError(item.src)}
                            />
                            
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <button
                                onClick={() => setSelectedImage(item)}
                                className="px-4 py-2 bg-[#CCFF00] text-black font-bold rounded-lg flex items-center gap-2 cursor-none interactive-hover"
                              >
                                <Maximize2 size={16} />
                                <span className="text-sm">全屏查看</span>
                              </button>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="relative w-full h-full">
                          {loadingItems.has(item.src) ? (
                            <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                              <Loader2 size={32} className="text-[#CCFF00] animate-spin" />
                            </div>
                          ) : (
                            <VideoPlayer src={item.src} title={item.title} />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="p-3 sm:p-4">
                      <p className="text-sm sm:text-base font-medium text-[#F0F0F0] truncate">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          item.type === 'image' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-purple-500/20 text-purple-400'
                        }`}>
                          {item.type === 'image' ? '图片' : '视频'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        )}

        <div className="mt-16 sm:mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-mono">
          <span>© 2026 DENG YUANUAN PORTFOLIO</span>
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-[#CCFF00] transition-colors cursor-none interactive-hover"
          >
            <ArrowLeft size={14} />
            <span>返回</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            src={selectedImage.src}
            title={selectedImage.title}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
