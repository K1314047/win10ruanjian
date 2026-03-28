'use client';

import { useMemo, useState } from "react";

const categories = [
  "全部",
  "办公效率",
  "设计创作",
  "开发工具",
  "系统工具",
  "影音娱乐",
  "网络连接",
];

const softwareList = [
  {
    name: "Notion",
    category: "办公效率",
    desc: "一体化笔记、文档与项目协作工具，适合个人与团队使用。",
    size: "82 MB",
    version: "v3.1.0",
    downloadUrl: "https://www.notion.so/desktop",
  },
  {
    name: "Figma",
    category: "设计创作",
    desc: "在线协同设计平台，适合 UI/UX、原型设计与设计系统搭建。",
    size: "96 MB",
    version: "v124.8",
    downloadUrl: "https://www.figma.com/downloads/",
  },
  {
    name: "VS Code",
    category: "开发工具",
    desc: "轻量且强大的代码编辑器，支持丰富插件生态。",
    size: "110 MB",
    version: "v1.98.2",
    downloadUrl: "https://code.visualstudio.com/download",
  },
  {
    name: "Everything",
    category: "系统工具",
    desc: "高速文件搜索工具，帮助你快速定位电脑中的文件。",
    size: "8 MB",
    version: "v1.5.0",
    downloadUrl: "https://www.voidtools.com/downloads/",
  },
  {
    name: "PotPlayer",
    category: "影音娱乐",
    desc: "本地视频播放器，支持多种格式与高级播放功能。",
    size: "39 MB",
    version: "v24.02",
    downloadUrl: "https://potplayer.daum.net/",
  },
  {
    name: "WPS Office",
    category: "办公效率",
    desc: "文档、表格、演示三合一办公套件，适合日常办公使用。",
    size: "214 MB",
    version: "v12.6",
    downloadUrl: "https://www.wps.com/download/",
  },
  {
    name: "Photoscape X",
    category: "设计创作",
    desc: "简单易用的图片编辑工具，适合基础修图与拼图。",
    size: "157 MB",
    version: "v4.2.1",
    downloadUrl: "https://x.photoscape.org/",
  },
  {
    name: "GitHub Desktop",
    category: "开发工具",
    desc: "图形化 Git 客户端，让版本控制操作更加轻松直观。",
    size: "125 MB",
    version: "v3.4.7",
    downloadUrl: "https://desktop.github.com/",
  },
  {
    name: "V2rayN",
    category: "网络连接",
    desc: "一款网络代理软件客户端。",
    size: "97.48 MB",
    version: "v3.4.7",
    downloadUrl: "https://alist.1314047.xyz/alist/d/APP/home/%E7%94%B5%E8%84%91%E8%BD%AF%E4%BB%B6/%E8%A3%85%E6%9C%BA%E5%BF%85%E5%A4%87/v2rayN-windows-64-desktop.zip",
  },
  {
    name: "Clash Verge",
    category: "网络连接",
    desc: "基于 Tauri 的 Mihomo GUI。",
    size: "11.14 MB",
    version: "v3.4.7",
    downloadUrl: "https://alist.1314047.xyz/alist/d/APP/home/%E7%94%B5%E8%84%91%E8%BD%AF%E4%BB%B6/%E8%A3%85%E6%9C%BA%E5%BF%85%E5%A4%87/clash-verge.zip",
  },
  {
    name: "Hiddify",
    category: "网络连接",
    desc: "一个基于Sing-Box的多平台的翻墙软件。",
    size: "35.79 MB",
    version: "v3.4.7",
    downloadUrl: "https://alist.1314047.xyz/alist/d/APP/home/%E7%94%B5%E8%84%91%E8%BD%AF%E4%BB%B6/%E8%A3%85%E6%9C%BA%E5%BF%85%E5%A4%87/Hiddify-Windows-Setup-x64.zip",
  },
];

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function SoftwareCard({ item }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
            {item.category}
          </span>
          <h4 className="mt-4 text-xl font-semibold">{item.name}</h4>
        </div>
        <div className="rounded-2xl border border-slate-200 px-3 py-2 text-xs text-slate-500">
          {item.version}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{item.desc}</p>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <div className="text-xs text-slate-400">安装包大小</div>
          <div className="mt-1 text-sm font-medium text-slate-700">
            {item.size}
          </div>
        </div>

        <a
          href={item.downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          下载
        </a>
      </div>
    </article>
  );
}

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    return softwareList.filter((item) => {
      const matchCategory =
        activeCategory === "全部" || item.category === activeCategory;

      const keyword = search.trim().toLowerCase();
      const matchSearch =
        item.name.toLowerCase().includes(keyword) ||
        item.desc.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword);

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">软件中心</h1>
            <p className="mt-1 text-sm text-slate-500">
              简洁、高效的软件下载站
            </p>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-600 md:flex">
            <a href="#home" className="transition hover:text-slate-900">
              首页
            </a>
            <a href="#categories" className="transition hover:text-slate-900">
              分类
            </a>
            <a href="#downloads" className="transition hover:text-slate-900">
              下载
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
                精选软件 · 安全下载
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                发现你需要的常用软件
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                提供办公、设计、开发、系统工具等常用软件分类，页面清爽直观，帮助用户快速找到并下载所需应用。
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#downloads"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  立即浏览
                </a>
                <a
                  href="#categories"
                  className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  查看分类
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard label="精选软件" value="120+" />
                <StatCard label="热门分类" value="5 类" />
                <StatCard label="日均下载" value="3.2k" />
                <StatCard label="持续更新" value="每周" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="categories"
          className="mx-auto max-w-7xl border-t border-slate-100 px-6 py-12"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">软件分类</h3>
              <p className="mt-2 text-sm text-slate-500">
                按类别快速筛选，提升查找效率。
              </p>
            </div>

            <div className="w-full md:w-72">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索软件名称"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={
                    active
                      ? "rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition"
                      : "rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <section id="downloads" className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredList.map((item) => (
              <SoftwareCard key={item.name} item={item} />
            ))}
          </div>

          {filteredList.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center text-slate-500">
              没有找到相关软件，请尝试更换关键词或分类。
            </div>
          ) : null}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 软件中心. All rights reserved.</p>
          <p>简洁白底风格 · 分类清晰 · 易于扩展</p>
        </div>
      </footer>
    </div>
  );
}