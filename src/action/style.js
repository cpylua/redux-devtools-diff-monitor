export default {
  base: {
    background: 'white',
    marginBottom: '10px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
  },

  toggle: {
    float: 'right',
    padding: '0 5px',
  },

  title: {
    cursor: 'pointer',
    padding: '12px',
    background: '#ddd'
    // userSelect: 'none',
    // WebkitUserSelect: 'none',
  },

  mutated: {
    background: '#0FD00F',
  },

  skipped: {
    background: 'black',
    color: 'white',
  },

  header: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: '5px 0',
    textAlign: 'center',
    width: '100%',
    fontSize: '0.9em',
    color: 'black'
  },

  actionData: {
    padding: '0 10px 10px 8px',
  },

  store: {
    margin: '0',
    padding: '10px',
  },

  changedProperty: {
    display: 'block',
  },

  oldValue: {
    textDecoration: 'line-through',
    color: '#F781BE',
  },

  newValue: {
    color: '#088A29',
  },
};
