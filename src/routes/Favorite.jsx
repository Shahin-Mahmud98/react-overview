import { Form } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components, no-unused-vars, react/prop-types
function Favorite({ contact }) {
    // eslint-disable-next-line react/prop-types
    const favorite = contact.favorite;
    return (
      <Form method="post">
        <button
          name="favorite"
          value={favorite ? "false" : "true"}
          aria-label={
            favorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {favorite ? "★" : "☆"}
        </button>
      </Form>
    );
  }
  export default Favorite;