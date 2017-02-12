export default function getNodeColor(node, neighbors) {
  if (neighbors.indexOf(node.id)) {
    return node.level === 1 ? 'blue' : 'green'
  }
  return node.level === 1 ? 'red' : 'gray'
}
