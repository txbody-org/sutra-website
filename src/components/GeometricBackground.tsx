const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      {/* Simplified Uniform Block Elements */}
      <div className="absolute inset-0">
        {/* Large Blocks */}
        <div 
          className="absolute w-16 h-16 rounded-lg animate-block-float-1 backdrop-blur-sm"
          style={{ 
            top: '18%', 
            left: '10%',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(139, 92, 246, 0.06) 100%)',
            boxShadow: '0 0 15px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(168, 85, 247, 0.15)'
          }}
        />
        <div 
          className="absolute w-16 h-16 rounded-lg animate-block-float-2 backdrop-blur-sm"
          style={{ 
            top: '60%', 
            right: '15%',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 100%)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.15)'
          }}
        />
        
        {/* Medium Blocks */}
        <div 
          className="absolute w-12 h-12 rounded-lg animate-block-float-3 backdrop-blur-sm"
          style={{ 
            top: '35%', 
            right: '25%',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%)',
            boxShadow: '0 0 12px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.15)'
          }}
        />
        <div 
          className="absolute w-12 h-12 rounded-lg animate-block-float-4 backdrop-blur-sm"
          style={{ 
            bottom: '25%', 
            left: '20%',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.06) 100%)',
            boxShadow: '0 0 12px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.15)'
          }}
        />
        <div 
          className="absolute w-12 h-12 rounded-lg animate-block-float-5 backdrop-blur-sm"
          style={{ 
            top: '45%', 
            left: '60%',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%)',
            boxShadow: '0 0 12px rgba(168, 85, 247, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(168, 85, 247, 0.15)'
          }}
        />
        
        {/* Small Accent Blocks */}
        <div 
          className="absolute w-8 h-8 rounded-lg animate-block-float-6 backdrop-blur-sm"
          style={{ 
            top: '25%', 
            right: '35%',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.06) 100%)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(59, 130, 246, 0.15)'
          }}
        />
        <div 
          className="absolute w-8 h-8 rounded-lg animate-block-float-1 backdrop-blur-sm"
          style={{ 
            bottom: '40%', 
            right: '45%',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%)',
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(139, 92, 246, 0.15)'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes block-float-1 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-12px) translateX(4px) rotate(2deg) scale(1.05); 
              opacity: 0.9; 
            }
          }

          @keyframes block-float-2 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.7; 
            }
            50% { 
              transform: translateY(-15px) translateX(-3px) rotate(-2deg) scale(1.03); 
              opacity: 0.95; 
            }
          }

          @keyframes block-float-3 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.5; 
            }
            50% { 
              transform: translateY(-18px) translateX(5px) rotate(3deg) scale(1.08); 
              opacity: 0.85; 
            }
          }

          @keyframes block-float-4 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-14px) translateX(-4px) rotate(-3deg) scale(1.06); 
              opacity: 0.9; 
            }
          }

          @keyframes block-float-5 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.55; 
            }
            50% { 
              transform: translateY(-16px) translateX(3px) rotate(4deg) scale(1.04); 
              opacity: 0.8; 
            }
          }

          @keyframes block-float-6 {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
              opacity: 0.65; 
            }
            50% { 
              transform: translateY(-20px) translateX(-5px) rotate(-4deg) scale(1.12); 
              opacity: 1; 
            }
          }

          .animate-block-float-1 {
            animation: block-float-1 10s ease-in-out infinite;
          }

          .animate-block-float-2 {
            animation: block-float-2 12s ease-in-out infinite 2s;
          }

          .animate-block-float-3 {
            animation: block-float-3 14s ease-in-out infinite 4s;
          }

          .animate-block-float-4 {
            animation: block-float-4 11s ease-in-out infinite 1s;
          }

          .animate-block-float-5 {
            animation: block-float-5 13s ease-in-out infinite 3s;
          }

          .animate-block-float-6 {
            animation: block-float-6 9s ease-in-out infinite 5s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-block-float-1,
          .animate-block-float-2,
          .animate-block-float-3,
          .animate-block-float-4,
          .animate-block-float-5,
          .animate-block-float-6 {
            animation: none;
            opacity: 0.7;
          }
        }

        @media (max-width: 768px) {
          [style*="w-16"] {
            width: 3rem;
            height: 3rem;
          }
          [style*="w-12"] {
            width: 2.5rem;
            height: 2.5rem;
          }
          [style*="w-8"] {
            width: 1.75rem;
            height: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GeometricBackground;