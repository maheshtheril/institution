import { useState } from 'react'
import { Upload, Play, MoreVertical, Archive, Share2, Download, Clock, BookOpen, XCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const Videos = () => {
  const { user } = useAuth();
  const isAdmin = user?.role?.toUpperCase() === 'ADMIN';
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const videos = [
    { 
      id: '1', 
      title: 'Bharatanatyam: Basic Adavus (Session 1-5)', 
      level: 'Junior', duration: '18:45', uploaded: '2 hours ago', 
      thumbnail: 'https://images.unsplash.com/photo-1580971032822-6e270914c62c?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/p1o4S7qW6R0' 
    },
    { 
      id: '2', 
      title: 'Kathak: Footwork & Chakkars Mastery', 
      level: 'Intermediate', duration: '22:10', uploaded: 'Yesterday', 
      thumbnail: 'https://images.unsplash.com/photo-1583095117194-967a99839958?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/6iS0K3X_tJ0'
    },
    { 
      id: '3', 
      title: 'Odissi: Mudras and Body Postures', 
      level: 'Advanced', duration: '35:20', uploaded: '3 days ago', 
      thumbnail: 'https://images.unsplash.com/photo-1624823183492-99079361a7a4?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/Pj_b7z3V_x8'
    },
    { 
      id: '4', 
      title: 'Mohiniyattam: Expressions (Abhinaya)', 
      level: 'All Levels', duration: '12:30', uploaded: '1 week ago', 
      thumbnail: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/3m4R30t-rXw'
    },
    { 
      id: '5', 
      title: 'Kuchipudi: Traditional Plate Dance', 
      level: 'Advanced', duration: '28:15', uploaded: '1 week ago', 
      thumbnail: 'https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/w8e0a7rY1kM'
    },
    { 
      id: '6', 
      title: 'Carnatic Music Rhythm Basics', 
      level: 'Junior', duration: '45:00', uploaded: '2 weeks ago', 
      thumbnail: 'https://images.unsplash.com/photo-1547049082-1a12c3bf2b76?w=800&q=80',
      embedUrl: 'https://www.youtube.com/embed/7Vp1U9Mv0K4'
    },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>{isAdmin ? 'Institutional Video Cloud' : 'Learning Resources'}</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isAdmin ? 'Manage institutional storage for class recordings and tutorials' : 'Access your class recordings, tutorials and assessments'}
          </p>
        </div>
        {isAdmin && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              <Archive size={18} /> Managed Archives
            </button>
            <button className="premium-button">
              <Upload size={18} /> Upload Recording
            </button>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', width: 'fit-content', overflowX: 'auto', maxWidth: '100%' }}>
        {['All Classes', 'Junior', 'Intermediate', 'Advanced', 'Assessments'].map((cat, i) => (
          <button 
            key={i} 
            className="premium-button" 
            style={{ 
              background: i === 0 ? 'var(--primary-glow)' : 'transparent', 
              color: i === 0 ? 'var(--primary)' : 'var(--text-muted)', 
              border: i === 0 ? '1px solid hsla(265, 85%, 65%, 0.2)' : '1px solid transparent',
              padding: '8px 16px',
              fontSize: '13px',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '40px' }}>
        {videos.map((vid, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="glass-card" 
            style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid hsla(0,0%,100%,0.05)' }}
          >
            <div 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                cursor: 'pointer', 
                aspectRatio: '16/9',
                background: 'linear-gradient(45deg, #1A1A1A, #2D2D2D)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setActiveVideo(vid)}
            >
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 700 }}>
                {vid.duration}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                 <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px var(--primary-glow)' }}>
                    <Play fill="white" size={28} />
                 </div>
                 <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Click to Play Session</span>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'white' }}>{vid.title}</h4>
                {isAdmin && (
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={18} /></button>
                )}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary)', fontWeight: 700 }}>
                   <BookOpen size={12} /> {vid.level}
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontWeight: 600 }}>
                   <Clock size={12} /> HD Quality
                 </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Added {vid.uploaded}</span>
                 <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Share2 size={18} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Download size={18} /></button>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               style={{ 
                 position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', 
                 backdropFilter: 'blur(10px)', zIndex: 1000, 
                 display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' 
               }}
            >
                <div style={{ maxWidth: '1000px', width: '100%', position: 'relative' }}>
                    <button 
                       onClick={() => setActiveVideo(null)}
                       style={{ position: 'absolute', top: '-50px', right: '0', background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                        <XCircle size={32} /> Close Player
                    </button>
                    <div style={{ aspectRatio: '16/9', background: 'black', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={`${activeVideo.embedUrl}?autoplay=1`}
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>{activeVideo.title}</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Course Level: <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{activeVideo.level}</span></p>
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Videos
