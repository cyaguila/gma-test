/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function SocialMedia({name, url, children}) {
    return (
        <li>
          <a
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="text-white transition hover:text-white/75"
          >
            <span className="sr-only">{name}</span>

            {children}

          </a>
        </li>
  
    )
}