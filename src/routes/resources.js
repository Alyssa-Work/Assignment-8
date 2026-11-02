import express from "express";

const router = express.Router();

let resources = [];
let nextId = 1;

router.get("/", (req, res) => {
  res.status(200).json(resources);
});

router.get("/:id", (req, res) => {
  const item = resources.find((r) => r.id === req.params.id);
  if (!item) return res.status(404).json({ error: "Resource not found" });
  res.status(200).json(item);
});

router.post("/", (req, res) => {
  const newItem = { id: String(nextId++), ...req.body };
  resources.push(newItem);
  res.status(201).json(newItem);
});

router.put("/:id", (req, res) => {
  const index = resources.findIndex((r) => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Resource not found" });
  resources[index] = { ...resources[index], ...req.body, id: resources[index].id };
  res.status(200).json(resources[index]);
});

router.delete("/:id", (req, res) => {
  const index = resources.findIndex((r) => r.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Resource not found" });
  const [removed] = resources.splice(index, 1);
  res.status(200).json(removed);
});

export default router;
