"use client"

export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "16rem" }}>
      <div
        style={{
          height: "3rem",
          width: "3rem",
          borderRadius: "50%",
          borderTop: "2px solid #ff3f6c",
          borderBottom: "2px solid #ff3f6c",
          animation: "spin 1s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
