

const FormatPrice = ({ props }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(props / 100);
};

export default FormatPrice;
