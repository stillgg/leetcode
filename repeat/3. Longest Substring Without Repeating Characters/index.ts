function lengthOfLongestSubstring(s: string): number {
    const set = new Set()
    let left = 0
    let right = 0

    let max = 0

    while (right < s.length) {
        const char1 = s[left]
        const char2 = s[right]
    
        if (set.has(char2)) {
            left++
            set.delete(char1)
        }
        else {
            set.add(char2)
            right++
        }

        max = Math.max(right - left, max)
    }

    return max
};


lengthOfLongestSubstring('abcabcbb')