export default function isNeighborLink(node, link) {
  return link.target.id === node.id || link.source.id === node.id
}
