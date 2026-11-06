export default function SmartImage({
  src,
  alt,
  className = "",
  style,
  width,
  height,
  loading = "lazy",
}) {
  const isRaster = /\.(jpe?g|png)$/i.test(src);
  const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");

  if (!isRaster) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        loading={loading}
      />
    );
  }

  return (
    <picture className="contents">
      <source type="image/webp" srcSet={webp} />
      <img
        src={src}
        alt={alt}
        className={className}
        style={style}
        width={width}
        height={height}
        loading={loading}
      />
    </picture>
  );
}
