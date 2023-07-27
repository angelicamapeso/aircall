export const getAllCalls = () =>
  fetch("https://cerulean-marlin-wig.cyclic.app/activities").then((res) =>
    res.json()
  );

export const getCallById = (id) =>
  fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`).then((res) =>
    res.json()
  );

export const updateCallArchive = (id, isArchived) =>
  fetch(`https://cerulean-marlin-wig.cyclic.app/activities/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      is_archived: isArchived,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.text());

export const resetCalls = () =>
  fetch("https://cerulean-marlin-wig.cyclic.app/reset", {
    method: "PATCH",
  }).then((res) => res.text());
