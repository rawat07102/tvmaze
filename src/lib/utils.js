export function extractSummary(summary) {
    if (!summary) return ""
    return summary.split("</b>")[1]?.replace("</p>")
}
