# 通用技术实践操作赛前培训网站

## 📖 项目简介

这是王华军老师的通用技术实践操作赛前培训网站，为3小时专业讲座提供数字化支持。网站涵盖木工、金工、电子技术三大领域，包含详细的工具介绍、操作演示和实际案例。

## 🌐 在线访问

- **GitHub Pages**: [https://w169968671.github.io/tech-training-website/](https://w169968671.github.io/tech-training-website/)
- **备用地址**: [https://dffeckdv.manus.space](https://dffeckdv.manus.space)

## ✨ 主要功能

### 📚 培训内容
- **培训概览** - 整体介绍和目标
- **工具专栏** - 详细的工具介绍和使用方法
- **木工技术** - 木工操作技能和实际案例
- **金工技术** - 金工加工技能和实际案例  
- **电子技术** - 电子制作技能和实际案例

### 🛠️ 实际案例
#### 木工案例（5个）
- 改进版手机支架制作
- 实用鞋架制作
- 多层书架制作
- 报纸架制作
- 收纳盒制作

#### 金工案例（3个）
- 改进版金属笔筒制作
- 金属书立制作
- 多功能工具架制作

#### 电子案例（1个）
- LED闪烁灯制作

### 🎬 教学资源
- 工具操作分解图示
- 制作步骤详细说明
- 教学演示视频
- 专业设计图纸
- 完成效果展示

## 🚀 本地开发

### 环境要求
- Node.js 18.0.0+
- npm 8.0.0+

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 📦 部署到GitHub Pages

### 自动部署
项目配置了GitHub Actions自动部署，当代码推送到main分支时会自动构建和部署。

### 手动部署
```bash
npm run deploy
```

## 🔧 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **图标库**: Lucide React
- **部署平台**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 项目结构

```
tech-training-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions部署配置
├── public/
│   ├── index.html             # HTML模板
│   └── CNAME                  # 自定义域名配置
├── src/
│   ├── assets/                # 静态资源
│   │   ├── images/           # 图片文件
│   │   └── videos/           # 视频文件
│   ├── components/           # React组件
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 应用入口
│   └── index.css            # 全局样式
├── .gitignore               # Git忽略文件
├── package.json             # 项目配置
├── vite.config.js          # Vite配置
├── tailwind.config.js      # Tailwind配置
└── README.md               # 项目说明
```

## 🎯 使用说明

### 导航功能
- 点击顶部导航标签切换不同技术领域
- 每个页面包含工具介绍、操作步骤和实际案例
- 支持响应式设计，适配各种设备

### 案例学习
- 每个案例包含设计图纸、制作步骤和完成效果
- 详细的材料清单和工艺要求
- 安全操作要点和注意事项

### 视频学习
- 专业的操作演示视频
- 关键步骤的详细展示
- 工具使用技巧和安全要点

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进项目：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 团队

- **项目负责人**: 王华军老师
- **技术团队**: 通用技术培训团队
- **GitHub仓库**: [w169968671/tech-training-website](https://github.com/w169968671/tech-training-website)
- **版本**: v1.0
- **更新日期**: 2025年7月

## 📞 联系我们

如有问题或建议，请通过以下方式联系：

- 提交 [GitHub Issue](https://github.com/w169968671/tech-training-website/issues)
- 发送邮件至: w169968671@gmail.com

---

**感谢使用通用技术培训网站！希望这个平台能为您的学习和教学提供帮助。**

