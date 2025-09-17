import './Sidebar.css';

const Sidebar = ({ relatedPosts }) => {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {relatedPosts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
