import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import SendIcon from '~/svgs/send.svg';
import FilmIcon from '~/svgs/film.svg';
import GalleryIcon from '~/svgs/gallery.svg';
import AttachmentIcon from '~/svgs/attachment.svg';
const WritePost = () => {
   const [editorState, setEditor] = useState(EditorState.createEmpty());

   const updateEditor = (content: EditorState) => setEditor(content);
   return (
      <div className="bg-white px-4">
         <span className="py-4 block border-b border-gray-300 text-xs font-extrabold">
            NEW POST
         </span>
         <div className="flex flex-wrap  justify-end items-end">
            <div className="flex-grow" style={{minWidth:300}}>
               <Editor
               ariaLabel="Add post"
                  placeholder="What's on your mind?"
                  editorState={editorState}
                  onChange={updateEditor}
               />
            </div>

            <div className="py-4 pl-8 flex">
               <button className=" rounded-md mr-4" aria-label="Add attachment">
                  <AttachmentIcon />
               </button>
               <button className=" rounded-md mr-4" aria-label="Add image">
                  <GalleryIcon />
               </button>
               <button className=" rounded-md mr-4" aria-label="Add video">
                  <FilmIcon />
               </button>
               <button className="bg-primary p-2 rounded-md" aria-label="submit">
                  <SendIcon />
               </button>
            </div>
         </div>
      </div>
   );
};

export default WritePost;
