import {createClient, groq} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-08-08',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });

const builder = imageUrlBuilder(client);

export async function getIntro() {
    const query = groq`*[_type == "intro"][0]`;
    const intro = await client.fetch(query);
    return intro;
  }

export async function getBio() {
    const query = groq`*[_type == "bio"]`;
    const bio = await client.fetch(query);
    return bio[0];
  }

export async function getPythonSkills() {
    const query = groq`*[_type == "skills" && title == "Python"][0]`;
    const skills = await client.fetch(query);
    return skills;
  }

export async function getRSkills() {
    const query = groq`*[_type == "skills" && title == "R"][0]`;
    const skills = await client.fetch(query);
    return skills;
  }

  export async function getProjects() {
    const query = groq`*[_type == "project"]`;
    const projects = await client.fetch(query);
    return projects;
}


export function urlFor(source) {
    return builder.image(source)
  }