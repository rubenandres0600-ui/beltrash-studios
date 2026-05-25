import { useEffect, useState } from "react";
import HolographicSticker from "holographic-sticker";
import { ChevronLeft } from "lucide-react";

const PRODUCTS = [
  {
    image: "/alvarenga.png",
    title: "ICED EDITION ",
    price: "$20.250 ARS",
    category: "Holo Pack Stickers Vol.1 x10",
  },
];

export default function App() {
  const [page, setPage] = useState<"home" | "store">("home");

  useEffect(() => {
    document.title = "Beltrash Studios";

    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");

    link.setAttribute("rel", "icon");
    link.setAttribute("href", "/logo barra.png");

    document.head.appendChild(link);
  }, []);

  return (
    <>
      {/* REMOVE WHITE BORDERS */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          background: #5865F2;
          overflow-x: hidden;
          font-family: system-ui, sans-serif;
        }

        body {
          margin: 0;
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#5865F2",
          color: "white",
          overflowX: "hidden",
        }}
      >
        {/* ================= HOME ================= */}
        {page === "home" && (
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* LOGO + TEXT */}
            <div
              onClick={() => setPage("store")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <img
                src="/zzz (1).png"
                style={{
                  width: "170px",
                  objectFit: "contain",
                }}
              />

              <span
                style={{
                  fontSize: "14px",
                  letterSpacing: "4px",
                  fontWeight: 300,
                  whiteSpace: "nowrap",
                  opacity: 0.9,
                }}
              >
                ARTICULOS DE COLECCION
              </span>
            </div>
          </div>
        )}

        {/* ================= STICKER SHOP ================= */}
        {page === "store" && (
          <div
            style={{
              minHeight: "100vh",
              padding: "40px 20px 80px",
              background: "#5865F2",
            }}
          >
            {/* BACK */}
            <button
              onClick={() => setPage("home")}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              <ChevronLeft color="white" size={32} />
            </button>

            {/* TITLE */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "60px",
              }}
            >
              <h1
                style={{
                  fontSize: "16px",
                  letterSpacing: "6px",
                  fontWeight: 300,
                  opacity: 0.95,
                }}
              >
                COLLECTIBLES SHOP
              </h1>
            </div>

            {/* PRODUCTS GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "80px 40px",
                justifyItems: "center",
                maxWidth: "1400px",
                margin: "0 auto",
              }}
            >
              {PRODUCTS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    width: "280px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* STICKER */}
                  <div
                    style={{
                      transition: "0.3s",
                    }}
                  >
                    <HolographicSticker.Root>
                      <HolographicSticker.Scene>
                        <HolographicSticker.Card
                          style={{
                            width: "280px",
                            height: "390px",
                            overflow: "visible",
                            background: "transparent",
                            boxShadow: "none",
                            borderRadius: "0px",
                          }}
                        >
                          <HolographicSticker.ImageLayer
                            src={item.image}
                            objectFit="contain"
                            style={{
                              width: "100%",
                              height: "100%",
                              background: "transparent",
                            }}
                          />

                          <HolographicSticker.Pattern
                            maskUrl={item.image}
                            textureUrl="https://assets.codepen.io/605876/figma-texture.png"
                            opacity={0.7}
                          >
                            <HolographicSticker.Refraction intensity={0.8} />
                          </HolographicSticker.Pattern>
                        </HolographicSticker.Card>
                      </HolographicSticker.Scene>
                    </HolographicSticker.Root>
                  </div>

                  {/* INFO */}
                  <div
                    style={{
                      marginTop: "18px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {/* TITLE */}
                    <p
                      style={{
                        fontSize: "12px",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        opacity: 0.95,
                      }}
                    >
                      {item.title}
                    </p>

                    {/* CATEGORY */}
                    <p
                      style={{
                        fontSize: "10px",
                        letterSpacing: "2px",
                        opacity: 0.65,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </p>

                    {/* PRICE */}
                    <p
                      style={{
                        marginTop: "6px",
                        fontSize: "13px",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                        color: "white",
                        fontWeight: 700,
                        opacity: 1,
                        textShadow: "0 0 12px rgba(255,255,255,0.35)",
                      }}
                    >
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
