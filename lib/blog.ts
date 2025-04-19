import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "blog-posts")

export interface BlogPost {
  id: string
  title: string
  date: string
  excerpt: string
  author: string
  authorRole?: string
  coverImage: string
  category: string
  content: string
}

export function getSortedPostsData(): Omit<BlogPost, "content">[] {
  // Get file names under /blog-posts
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "")

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title || "",
        date: matterResult.data.date || "",
        excerpt: matterResult.data.excerpt || "",
        author: matterResult.data.author || "",
        authorRole: matterResult.data.authorRole || "",
        coverImage: matterResult.data.coverImage || "",
        category: matterResult.data.category || "",
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`)

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Blog post not found: ${id}`)
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    content,
    title: matterResult.data.title || "",
    date: matterResult.data.date || "",
    excerpt: matterResult.data.excerpt || "",
    author: matterResult.data.author || "",
    authorRole: matterResult.data.authorRole || "",
    coverImage: matterResult.data.coverImage || "",
    category: matterResult.data.category || "",
  }
}
