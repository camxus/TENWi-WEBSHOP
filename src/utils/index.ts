import client from "../components/ApolloClient";
import GALLERY_IMAGES from "../queries/gallery-images";

// Helper function to extract caption text
export const extractCaptionText = (caption: string) => {
  if (!caption.includes(">")) return "";

  const start = caption.indexOf(">") + 1;
  let end = caption.lastIndexOf("<");

  if (caption.includes("&")) {
    end = caption.lastIndexOf("&");
  }

  return caption.substring(start, end);
};

export interface ProcessedImage {
  node: any; // Replace with your GraphQL node type if available
  homepage: boolean;
  newsletter: boolean;
  webshop: boolean;
}

/**
 * Process GraphQL media items into a structured list with flags
 * @param edges - array of media item edges from GraphQL
 */
export function processGalleryImages(edges: any[]): ProcessedImage[] {
  return edges.map((edge) => {
    const captionText = edge.node.caption?.split("\n")[0] ?? "";
    const caption = extractCaptionText(captionText);

    return {
      node: edge.node,
      homepage: caption.includes("homepage"),
      newsletter: caption.includes("newsletter"),
      webshop: caption.includes("webshop"),
    };
  });
}

export interface WebshopImage {
  node: any; // Replace with your GraphQL node type if available
  homepage: boolean;
  newsletter: boolean;
  webshop: boolean;
}

/**
 * Fetches media items with search "webshop" and processes captions
 */
export async function getWebshopImages(): Promise<WebshopImage[]> {
  try {
    const { data } = await client.query({
      query: GALLERY_IMAGES,
      variables: { search: "webshop" },
    });

    const edges = data.mediaItems.edges;

    const imagesList = edges.map((edge: any) => {
      const captionText = edge.node.caption?.split("\n")[0] ?? "";
      const caption = extractCaptionText(captionText);

      return {
        node: edge.node,
        homepage: caption.includes("homepage"),
        newsletter: caption.includes("newsletter"),
        webshop: caption.includes("webshop"),
      };
    });

    return imagesList;
  } catch (error) {
    console.error("Error fetching webshop images:", error);
    return [];
  }
}