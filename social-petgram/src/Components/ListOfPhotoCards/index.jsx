import { PhothoCard } from "../PhotoCard";

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {[1, 2, 3].map(id => <PhothoCard key={id} />)}
    </ul>
  )
}