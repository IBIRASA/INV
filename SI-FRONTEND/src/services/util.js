export const formatDate = (toDate) => {
    const date = new Date(toDate.createdAt);
    const formattedDate = date.toLocaleDateString("en-US", { timeZone: "UTC" });
    return formattedDate;
  };