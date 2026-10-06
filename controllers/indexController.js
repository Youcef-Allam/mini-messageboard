const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export default function getIndex(req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

export function getForm(req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
}

export function postForm(req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
}

export function getMessage(req, res, next) {
  const message = messages[req.params.messageId];
  res.render("messageDetails", {
    title: "Mini Messageboard",
    message: message,
  });
}
