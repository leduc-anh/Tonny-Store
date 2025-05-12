export function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD") // chuẩn hóa unicode
    .replace(/[\u0300-\u036f]/g, "") // loại dấu
    .replace(/[^a-z0-9\s-]/g, "") // loại ký tự đặc biệt
    .trim()
    .replace(/\s+/g, '-'); // thay space bằng gạch ngang
}