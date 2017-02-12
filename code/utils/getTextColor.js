export default function getTextColor(node, neighbors) {
  return neighbors.indexOf(node.id) ? 'green' : 'black'
}
