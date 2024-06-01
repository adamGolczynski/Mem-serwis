import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

const memesFilePath = path.join(process.cwd(), 'app', 'data', 'db.json');

export const GET = async (request) => {
  try {
    const memesData = JSON.parse(fs.readFileSync(memesFilePath, 'utf8'));
    return NextResponse.json(memesData.memes);
  } catch (error) {
    console.error('Error fetching memes:', error);
    return NextResponse.json({ error: 'Failed to fetch memes' }, { status: 500 });
  }
};

export async function PATCH(request) {
  try {
    const { id, upvotes, downvotes } = await request.json();

    const memesData = JSON.parse(fs.readFileSync(memesFilePath, 'utf8'));

    const updatedMemes = memesData.memes.map((meme) => {
      if (meme.id === id) {
        return { ...meme, upvotes, downvotes };
      }
      return meme;
    });

    const updatedData = { memes: updatedMemes };

    fs.writeFileSync(memesFilePath, JSON.stringify(updatedData, null, 2));

    return NextResponse.json({ message: 'Meme updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating meme:', error);
    return NextResponse.json({ error: 'Failed to update meme' }, { status: 500 });
  }
}