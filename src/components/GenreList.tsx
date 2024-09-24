import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImageUrl from "../services/image-url";
import { Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  selectedFilters: boolean;
}

const GenreList = ({
  onSelectGenre,
  selectedGenre,
  selectedFilters,
}: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <List marginTop={5}>
        {selectedFilters && (
          <Button marginBottom={3} onClick={() => location.reload()}>
            Clear Filters
          </Button>
        )}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                objectFit="cover"
                borderRadius={8}
                src={GetCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="large"
                whiteSpace="normal"
                textAlign="left"
                variant={genre.id === selectedGenre?.id ? "outline" : "ghost"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
