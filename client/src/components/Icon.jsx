function Icon({ path = "options", className = "w-4 h-4" }) {
    return (
      <img
        src={`https://assets.codepen.io/3685267/${path}.svg`}
        alt=""
        className={className}
      />
    );

}

export default Icon;