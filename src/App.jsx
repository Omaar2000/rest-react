import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, ConfigProvider, Layout, theme } from "antd";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import DetailPage from "./pages/detail-page";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { toggleDarkMode } from "./utils/toggleMode";
import { loadInitialStates } from "./utils/loadInitialStates";
import { toggleLanguage } from "./utils/toggleLang";

// :root {
//   --primary-text: hsl(200, 15%, 8%);
//   --background-light: hsl(0, 0%, 98%);
//   --background-dark: hsl(207, 26%, 17%);
//   --dark-elements: hsl(209, 23%, 22%);
//   --light-input: hsl(0, 0%, 52%);
//   --light-elements: #ffffff;
// }
const queryClient = new QueryClient();
function App() {
  const { Header } = Layout;
  const [isDark, setIsDark] = useState(localStorage.getItem("mode") === "dark");
  const [dir, setDir] = useState("ltr");
  const { t } = useTranslation();

  useEffect(() => {
    loadInitialStates(setDir);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
            token: {
              colorPrimary: isDark ? "#fff" : "hsl(207, 26%, 17%)", // Custom primary color
              colorBgBase: isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)", // Background color
              colorTextBase: isDark ? "#ffffff" : "hsl(200, 15%, 8%)", // Text color
            },
          }}
        >
          <div className={`App`} dir={dir}>
            <Layout>
              {/* Header Section */}
              <Header
                itemType="primary"
                className="dark:bg-[#2b3945] shadow-lg bg-white flex justify-between items-center p-6"
              >
                <h2 className="text-lg font-[700] ms-6">{t("TITLE")}</h2>
                <div className="flex gap-3 me-10 text-md">
                  <Button onClick={() => toggleLanguage(setDir)}>
                    {i18n.language === "ar" ? t("English") : t("العربية")}
                  </Button>
                  <Button onClick={() => toggleDarkMode(isDark, setIsDark)}>
                    {isDark ? t("LIGHT") : t("DARK")}
                  </Button>
                </div>
              </Header>

              {/* Routes */}

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<DetailPage />} />
              </Routes>
            </Layout>
          </div>
        </ConfigProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
