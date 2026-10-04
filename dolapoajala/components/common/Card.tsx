import { CardProps } from "@/interfaces";
import Image from "next/image";

const hostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const Card: React.FC<CardProps> = ({ name, description, image, url, category, platform, keyword, tags, index = 0 }) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`featured-project project-tone-${index % 3}`}
    >
      <div className="project-visual">
        <span className="project-backdrop" aria-hidden="true">
          {keyword}
        </span>
        <div className="project-visual-top">
          <span>
            {number} / {category}
          </span>
          <span className="project-open" aria-hidden="true">
            ↗
          </span>
        </div>

        {platform === "Mobile" ? (
          <div className="project-phone">
            <div>
              <Image src={image} alt={`${name} app screen`} fill sizes="240px" />
            </div>
          </div>
        ) : (
          <div className="project-browser">
            <div className="browser-chrome" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{hostname(url)}</span>
            </div>
            <div className="project-screenshot">
              <Image src={image} alt={`${name} interface`} fill sizes="(max-width: 767px) 90vw, 900px" />
            </div>
          </div>
        )}

        <span className="project-visual-caption">{platform} · {tags?.slice(0, 3).join(" · ")}</span>
      </div>

      <div className="project-caption">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          {tags && tags.length > 0 && (
            <ul className="tech-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
        <span className="micro-label">{platform}</span>
      </div>
    </a>
  );
};

export default Card;
