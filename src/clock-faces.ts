type SocialIcon = 'x' | 'github' | 'web';

type Social = {
  name: string;
  url: string;

  icon?: SocialIcon;
}

type ClockFace = {
  // Required to identify the clock face
  name: string;
  slug: string;

  author?: string;
  socials?: Social[]
}

export const clockFaces: Record<string, ClockFace> = {
  'mynth': {
    name: 'Mynth',
    slug: 'mynth',
    author: 'mynth',
  }
}