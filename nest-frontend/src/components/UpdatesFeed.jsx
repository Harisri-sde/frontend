import { useState } from "react";
import { announcements as initialAnnouncements } from "../data/mockData";

export default function UpdatesFeed({ canPost = false }) {
  const [updates, setUpdates] = useState(
    initialAnnouncements
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePost = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newUpdate = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      category: "General",
      date: new Date()
        .toISOString()
        .split("T")[0],
      author: "HR Department",
    };

    setUpdates((previous) => [
      newUpdate,
      ...previous,
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="updates-container">

      {canPost && (
        <div className="post-update-card">

          <div className="card-header">
            <div>
              <p className="card-label">
                HR / Admin
              </p>

              <h3>
                Post Company Update
              </h3>
            </div>
          </div>


          <form
            className="update-form"
            onSubmit={handlePost}
          >

            <div className="form-group">

              <label htmlFor="update-title">
                Title
              </label>

              <input
                id="update-title"
                type="text"
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Enter update title"
              />

            </div>


            <div className="form-group">

              <label htmlFor="update-description">
                Description
              </label>

              <textarea
                id="update-description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="Write your company update..."
                rows="4"
              />

            </div>


            <button
              type="submit"
              className="primary-button"
            >
              Post Update
            </button>

          </form>

        </div>
      )}


      <div className="updates-list">

        {updates.map((update) => (

          <article
            key={update.id}
            className="update-card"
          >

            <div className="update-meta">

              <span className="update-category">
                {update.category}
              </span>

              <span>
                {update.date}
              </span>

            </div>


            <h3>
              {update.title}
            </h3>


            <p>
              {update.description}
            </p>


            <small>
              Posted by {update.author}
            </small>

          </article>

        ))}

      </div>

    </div>
  );
}