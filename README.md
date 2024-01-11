# Nextra Personal Website Template 

Đây là template bao gồm gần như mọi thứ bạn cần để xây dựng một trang web cá nhân. Bạn có thể viết **tài liệu** và **blog**, có thanh điều hướng, thanh tìm kiếm, thanh trang, thanh TOC, và các thành phần tích hợp khác. Và đặc biệt có hỗ trợ đa ngôn ngữ (i18n) - đã cấu hình sẵn tiếng Việt và tiếng Anh. 

[**Xem Demo →**](https://nextra-personal-website-template.vercel.app)

## Công nghệ sử dụng

- NextJS 14
- Nextra v3 alpha
- Tailwind CSS, Shadcn/ui, Headless UI...
- MDX v3

Xem thêm các tính năng mới của Nextra v3 [tại đây](https://the-guild.dev/blog/nextra-3)

## Bắt đầu

### Triển khai trên Vercel

Bạn có thể bắt đầu bằng cách tạo trang web Nextra của riêng bạn và triển khai lên Vercel bằng cách nhấp vào liên kết:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fnamnguyenthanhwork%2Fnextra-personal-website-template&showOptionalTeamCreation=false)

Vercel sẽ sao chép [Nextra Personal Website Template](https://github.com/namnguyenthanhwork/nextra-personal-website-template) và triển khai trang web cho bạn. Khi hoàn thành, mọi commit trong repo sẽ được triển khai tự động.

### Sao chép Repository

Bạn cũng có thể sao chép [Repository này](https://github.com/namnguyenthanhwork/nextra-personal-website-template) một cách thủ công.

### Cài đặt 

Để tạo một trang Nextra Docs một cách thủ công, bạn phải cài đặt **Next.js**, **React**, **Nextra V3 alpha**, và **Nextra Docs Theme V3 alpha**. Trong thư mục dự án của bạn, chạy lệnh sau để cài đặt các phụ thuộc:

```
npm i next react react-dom nextra@alpha nextra-theme-docs@alpha
```

Nếu bạn đã cài đặt Next.js trong dự án của mình, bạn chỉ cần cài đặt `nextra` và `nextra-theme-docs`.

Thêm các tập lệnh sau vào `package.json`:

```json filename="package.json"
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

Bạn có thể chạy project sử dụng npm `npm run dev`, chạy ở chế độ phát triển hoặc `npm run build && npm run start` cho chế độ production.

### Thêm cấu hình Next.js 

Tạo tệp `next.config.js` sau trong thư mục gốc của dự án:

```
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra();

// Nếu bạn có các cấu hình Next.js khác, bạn có thể truyền chúng làm tham số:
// module.exports = withNextra({ /* cấu hình next.js khác */ })
```

Với cấu hình trên, Nextra có thể xử lý các tệp Markdown trong dự án Next.js của bạn, với chủ đề được chỉ định. Các cấu hình Nextra khác có thể được tìm thấy trong [Hướng Dẫn](https://nextra.site/docs/guide).

### Tạo cấu hình Docs Theme

Cuối cùng, tạo tệp `theme.config.jsx` tương ứng trong thư mục gốc của dự án. Điều này sẽ được sử dụng để cấu hình chủ đề Nextra Docs:

```
export default {
  logo: <span>Nextra Template</span>,
  project: {
    link: 'https://github.com/namnguyenthanhwork/nextra-personal-website-template',
  },
  // ... các tùy chọn chủ đề khác
};
```

Cấu hình chủ đề đầy đủ có thể được tìm thấy [tại đây](https://nextra.site/docs/docs-theme/theme-configuration).

### Sẵn sàng sử dụng 

Bây giờ, bạn có thể tạo trang MDX đầu tiên của mình tại `pages/index.mdx`:

```mdx filename="pages/index.mdx"
# Chào mừng đến với Nextra

Xin chào, thế giới!
```

Và chạy lệnh `next` hoặc `next dev` được chỉ định trong `package.json` để bắt đầu phát triển dự án! 🎉
