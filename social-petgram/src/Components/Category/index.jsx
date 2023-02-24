const DEFAULT_IMAGE = "https://picsum.photos/200/300";
import { Anchor, Image } from "./styles";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
);
