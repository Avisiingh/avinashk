import fs from 'fs';
import path from 'path';

// Helper function to read JSON files
export function readJsonFile(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(fileContents);
}

// Get personal information
export function getPersonalInfo() {
  return readJsonFile('src/content/personal.json');
}

// Get skills data
export function getSkills() {
  return readJsonFile('src/content/skills.json');
}

// Get projects data
export function getProjects() {
  const projects = readJsonFile('src/content/projects.json').projects;
  return {
    projects,
    featuredProjects: projects.filter((project: any) => project.featured),
  };
}

// Get certifications data
export function getCertifications() {
  return readJsonFile('src/content/certifications.json').certifications;
}

// Get blog posts
export function getBlogPosts() {
  return readJsonFile('src/content/blog.json').posts;
}

// Get a single blog post by slug
export function getBlogPostBySlug(slug: string) {
  const posts = readJsonFile('src/content/blog.json').posts;
  return posts.find((post: any) => post.slug === slug);
}

// Get notes categories
export function getNotesCategories() {
  return readJsonFile('src/content/notes.json').categories;
}

// Get notes by category
export function getNotesByCategory(categoryId: string) {
  const categories = readJsonFile('src/content/notes.json').categories;
  const category = categories.find((cat: any) => cat.id === categoryId);
  return category ? category.notes : [];
}

// Get a single note by id
export function getNoteById(noteId: string) {
  const categories = readJsonFile('src/content/notes.json').categories;
  for (const category of categories) {
    const note = category.notes.find((note: any) => note.id === noteId);
    if (note) {
      return { ...note, category: category.name, categoryId: category.id };
    }
  }
  return null;
} 