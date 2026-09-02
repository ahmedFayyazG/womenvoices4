import { ImageResponse } from "next/og";

export const alt = "Women’s Voices — Empowering women in our community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "linear-gradient(135deg, #c91f71 0%, #6f20f4 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: 80,
        textAlign: "center",
        width: "100%",
      }}
    >
      <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -3 }}>
        Women’s Voices
      </div>
      <div style={{ color: "#d8ff45", fontSize: 38, marginTop: 28 }}>
        Empowering women in our community
      </div>
      <div style={{ fontSize: 24, marginTop: 56 }}>Longsight · Manchester</div>
    </div>,
    size,
  );
}
