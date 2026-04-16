// eslint-disable-next-line react/prop-types
export function ChangeName({ setName }) {
  let tempName = "";
  return (
    <div>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          tempName = e.target.value;
        }}
      />
      <button
        onClick={() => {
          setName(tempName);
        }}
      >
        set name
      </button>
    </div>
  );
}