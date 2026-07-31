import { useState, useEffect } from "react";
import { validatePost, platformLimits } from "./validationStrategy";

function PostComposer() {
  const [platform, setPlatform] = useState("twitter");
  const [content, setContent] = useState("");
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const savedDrafts =
      JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(savedDrafts);
  }, []);

  const result = validatePost(content, platform);

  const saveDraft = () => {
    const newDraft = {
      platform,
      content,
    };

    const updatedDrafts = [...drafts, newDraft];

    setDrafts(updatedDrafts);

    localStorage.setItem(
      "drafts",
      JSON.stringify(updatedDrafts)
    );

    setContent("");

    alert("Draft Saved Successfully!");
  };

  const deleteDraft = (index) => {
    const updatedDrafts = drafts.filter(
      (_, i) => i !== index
    );

    setDrafts(updatedDrafts);

    localStorage.setItem(
      "drafts",
      JSON.stringify(updatedDrafts)
    );
  };

  const editDraft = (draft) => {
    setPlatform(draft.platform);
    setContent(draft.content);
  };

  return (
    <div className="container">
      <h2>📱 Social Media Post Composer</h2>

      <label>Select Platform</label>

      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
        <option value="instagram">Instagram</option>
      </select>

      <textarea
        rows="6"
        placeholder="Write your post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <p className="counter">
        {content.length} / {platformLimits[platform]}
      </p>

      {!result.isValid && (
        <p className="error">{result.error}</p>
      )}

      <button
        disabled={!result.isValid}
        onClick={saveDraft}
      >
        Save Draft
      </button>

      <hr />

      <h3>Saved Drafts</h3>

      {drafts.length === 0 && <p>No Drafts Available</p>}

      {drafts.map((draft, index) => (
        <div key={index} className="card">
          <h4>{draft.platform.toUpperCase()}</h4>

          <p>{draft.content}</p>

          <button
            onClick={() => editDraft(draft)}
          >
            Edit
          </button>

          <button
            onClick={() => deleteDraft(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostComposer;