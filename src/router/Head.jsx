import { Helmet } from "react-helmet";

export default function Head({ title, description, children }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description ? description : title} />
      {children}
    </Helmet>
  );
}
