import PropTypes from 'prop-types';

function BlogPost(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <h6>Post No.: {props.postNumber}</h6>
      {props.children}
    </>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  postNumber: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function ExamplePropTypes() {
  return (
    <>
      <BlogPost title="This Is A Post About Animals" postNumber={1}>
        <img
          src="https://images.pexels.com/photos/17811/pexels-photo.jpg?cs=srgb&dl=pexels-carlos-spitzer-17811.jpg&fm=jpg"
          alt="tucan"
          width="100"
          height="100"
        />
        <p>
          Animals Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </BlogPost>
      <BlogPost title="This Is A Post About Fruits" postNumber={2}>
        <p>
          Fruits Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img
          src="https://images.pexels.com/photos/17811/pexels-photo.jpg?cs=srgb&dl=pexels-carlos-spitzer-17811.jpg&fm=jpg"
          alt="tucan"
          width="100"
          height="100"
        />
      </BlogPost>
      <BlogPost title="This Is A Post About Pokemons" postNumber={3}>
        <img
          src="https://images.pexels.com/photos/17811/pexels-photo.jpg?cs=srgb&dl=pexels-carlos-spitzer-17811.jpg&fm=jpg"
          alt="tucan"
          width="100"
          height="100"
        />
        <p>
          Pokemons Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img
          src="https://images.pexels.com/photos/17811/pexels-photo.jpg?cs=srgb&dl=pexels-carlos-spitzer-17811.jpg&fm=jpg"
          alt="tucan"
          width="100"
          height="100"
        />
      </BlogPost>
      <BlogPost title="This Is A Post About Flex Box" postNumber={4}>
        <p>
          Flex Box Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </BlogPost>
    </>
  );
}

// Component using content as a regular prop
/* <BlogPost
        title="This Is A Post About Flex Box"
        content="Flex Box Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum."
   /> */
