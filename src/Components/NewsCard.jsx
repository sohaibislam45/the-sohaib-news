// NewsCard.jsx
import React from "react";
import {
  FaStar,
  FaRegStar,
  FaEye,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

const formatDateLong = (isoDate) => {
  if (!isoDate) return "";
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

// small helper to truncate text safely
const truncate = (text, len = 220) =>
  text && text.length > len ? text.slice(0, len).trim() + "..." : text;

const NewsCard = ({ card }) => {
  if (!card) return null;

  const {
    id,
    title,
    rating,
    total_view,
    author = {},
    thumbnail_url,
    image_url,
    details,
    tags = [],
    others = {},
  } = card;

  const publishedDateIso = author?.published_date || ""; // ISO string
  const formattedDateShort = publishedDateIso
    ? new Date(publishedDateIso).toLocaleDateString("en-CA")
    : ""; // small line under name
  const formattedDateLong = formatDateLong(publishedDateIso); // Sunday, November 27, 2025

  // rating number is between 0-5, show filled stars
  const ratingNumber = rating?.number ?? 0;

  return (
    <article className="max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 mb-10">
      {/* top author row */}
      <div className="flex items-center justify-between px-5 py-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover border"
          />
          <div>
            <div className="text-sm font-semibold text-gray-800">
              {author.name}
            </div>
            <div className="text-xs text-gray-500">{formattedDateShort}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <button
            type="button"
            className="p-2 rounded hover:bg-gray-100"
            aria-label="bookmark"
            title="Bookmark"
          >
            <FaBookmark />
          </button>
          <button
            type="button"
            className="p-2 rounded hover:bg-gray-100"
            aria-label="share"
            title="Share"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* title */}
      <div className="px-6 pt-6 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>
      </div>

      {/* hero image */}
      <div className="px-6 pb-6">
        <img
          src={image_url || thumbnail_url}
          alt={title}
          className="w-full h-64 md:h-56 object-cover rounded-lg border"
        />
      </div>

      {/* body summary */}
      <div className="px-6 pb-6">
        {/* Use the long formatted date here (just below image like your screenshot) */}
        {formattedDateLong && (
          <div className="text-sm text-gray-500 mb-3">{formattedDateLong}</div>
        )}

        <span className="text-gray-600 leading-relaxed">
          {truncate(details, 200)}
        </span>

        <span className="ml-1">
          <a
            href={`/news/${id}`}
            className="text-orange-500 font-medium hover:underline"
          >
            Read More
          </a>
        </span>

        {/* tags / badges */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tags.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
            >
              {t}
            </span>
          ))}

          {(rating?.badge || others?.is_trending) && (
            <span className="ml-2 px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-700 font-semibold">
              {rating?.badge || "trending"}
            </span>
          )}
        </div>
      </div>

      {/* footer: rating + views */}
      <div className="px-6 pb-6 pt-1 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            {/* stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => {
                const idx = i + 1;
                return idx <= Math.round(ratingNumber) ? (
                  <FaStar key={i} className="text-amber-400" />
                ) : (
                  <FaRegStar key={i} className="text-amber-400 opacity-30" />
                );
              })}
            </div>

            <span className="ml-3 text-sm font-semibold text-gray-700">
              {ratingNumber.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-2">
            <FaEye />
            <span className="text-sm">{total_view ?? 0}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
