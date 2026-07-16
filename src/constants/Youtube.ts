/**
 * Extracts the video ID from any common YouTube URL format:
 * - https://www.youtube.com/watch?v=ID
 * - https://youtu.be/ID
 * - https://www.youtube.com/embed/ID
 */
export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

/** Returns the proper /embed/ URL for use in an <iframe src="...">. */
export function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : url;
}

/** Returns YouTube's hosted thumbnail for a given video URL. */
export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : "";
}