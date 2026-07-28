// SEO-friendly trimming utilities
// Titles: max 60 chars, cut at word boundary, keep primary keyword at start
// Descriptions: max 155 chars, cut at sentence or word boundary

export function seoTitle(title, maxLen = 60) {
  if (!title) return '';
  if (title.length <= maxLen) return title;
  // Try to cut at last space before maxLen
  let trimmed = title.slice(0, maxLen);
  const lastSpace = trimmed.lastIndexOf(' ');
  const lastPipe = trimmed.lastIndexOf('|');
  const lastDash = trimmed.lastIndexOf('–');
  const lastColon = trimmed.lastIndexOf(':');
  // Prefer cutting at natural separator if within 10 chars of maxLen
  let cutAt = lastSpace;
  // If there's a pipe/dash/colon near the end, cut there for cleaner title
  const separators = [lastPipe, lastDash, lastColon].filter(i => i > 0 && i > maxLen - 15);
  if (separators.length > 0) {
    cutAt = Math.max(...separators);
  }
  if (cutAt > 20) {
    trimmed = title.slice(0, cutAt).trim();
  } else {
    trimmed = trimmed.trim();
  }
  // Remove trailing separator characters
  trimmed = trimmed.replace(/[\s|–:\-]+$/g, '').trim();
  return trimmed;
}

export function seoDescription(desc, maxLen = 155) {
  if (!desc) return '';
  // Normalize whitespace
  let text = desc.replace(/\s+/g, ' ').trim();
  if (text.length <= maxLen) return text;
  // Try to cut at sentence boundary
  let trimmed = text.slice(0, maxLen);
  const lastSentenceEnd = Math.max(
    trimmed.lastIndexOf('. '),
    trimmed.lastIndexOf('! '),
    trimmed.lastIndexOf('? ')
  );
  if (lastSentenceEnd > 60) {
    // Cut at sentence end, include period
    return text.slice(0, lastSentenceEnd + 1).trim();
  }
  // Cut at last space before maxLen
  const lastSpace = trimmed.lastIndexOf(' ');
  if (lastSpace > 40) {
    trimmed = trimmed.slice(0, lastSpace).trim();
  }
  // Ensure it doesn't end with incomplete word and add ellipsis if needed? For meta, better not add ellipsis, just complete word
  return trimmed;
}

// Specific helpers for common patterns
export function buildCityTitle(serviceTitle, cityName, stateName, maxLen = 60) {
  // Primary keyword: Service in City
  const primary = `${serviceTitle} in ${cityName}`;
  // Full with state
  const full = `${primary} – ${stateName}`;
  if (full.length <= maxLen) return full;
  // If too long, drop state or shorten
  if (primary.length <= maxLen) return primary;
  // Trim service title if too long (unlikely)
  return seoTitle(primary, maxLen);
}

export function buildStateTitle(stateName, cityCount, maxLen = 60) {
  const title = `Career Counselling in ${stateName}: ${cityCount} Cities Covered`;
  return seoTitle(title, maxLen);
}

export function buildServiceTitle(baseTitle, maxLen = 60) {
  // Remove secondary part after | if too long
  if (baseTitle.length <= maxLen) return baseTitle;
  // Try to keep first part before |
  const parts = baseTitle.split('|');
  if (parts[0].trim().length <= maxLen) return parts[0].trim();
  return seoTitle(baseTitle, maxLen);
}

export function buildBlogTitle(postTitle, maxLen = 60) {
  // Keep primary keyword, remove secondary after : or –
  // Example: "How to Choose the Right Stream After 10th: A Complete Guide for Indian Students and Parents" -> "How to Choose the Right Stream After 10th"
  let base = postTitle;
  // Split by colon or dash and take first part if first part is >=30 chars and contains main keyword
  const colonIdx = base.indexOf(':');
  if (colonIdx > 30 && colonIdx < maxLen) {
    base = base.slice(0, colonIdx).trim();
  }
  const dashIdx = base.indexOf('–');
  if (dashIdx > 30 && dashIdx < maxLen) {
    base = base.slice(0, dashIdx).trim();
  }
  return seoTitle(base, maxLen);
}
