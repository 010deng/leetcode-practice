export default (desk) => {
	// 存储每张卡牌的总数
	// 修改排序的方式修改为直接统计每个相同字符的数量，思路不变（LeetCode测试用例）
	let group = []
	// 中间变量
	let tmp = {}
	desk.forEach((item) => {
		// 设计成以arr的item为key，以个数为values的对象
		tmp[item] = tmp[item] ? tmp[item] + 1 : 1
	})
	for (let v of Object.values(tmp)) {
		group.push(v)
	}
	// 此时group已经存放的是每张牌的总数了（数组只遍历一遍，避免了排序和正则的耗时）
	// 求两个数的最大公约数
	let gcd = (a, b) => {
		if (b === 0) {
			return a
		} else {
			return gcd(b, a % b)
		}
	}
	// 里面仍存在两个可以比较的数
	while (group.length > 1) {
		let a = group.shift()
		let b = group.shift()
		let v = gcd(a, b)
		if (v === 1) {
			return false
		} else {
			group.unshift(v)
		}
	}
	return group.length ? group[0] > 1 : false
}