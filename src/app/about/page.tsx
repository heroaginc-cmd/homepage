import type { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
}

export default function AboutPage() {
  return (
    <main>

      {/* ミッション */}
      <section>
        <h1>伝わるを創る</h1>
        <p>可能性を最大化させ、価値の創造に伴走する。</p>
      </section>

      {/* バリュー */}
      <section>
        <h2>Value</h2>
        <ol>
          <li>顧客の願う成果を共に求め</li>
          <li>本質的な価値を追求し</li>
          <li>関わる全ての企業への感謝を忘れず</li>
          <li>常に挑戦する心を持って</li>
          <li>最高の成果を創造する</li>
        </ol>
      </section>

      {/* 会社概要 */}
      <section>
        <h2>会社概要</h2>
        <table>
          <tbody>
            <tr>
              <th>会社名</th>
              <td>HERO株式会社</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>山形 啓泰（YAMAGATA HIROYASU）</td>
            </tr>
            <tr>
              <th>創業</th>
              <td>2021年10月8日</td>
            </tr>
            <tr>
              <th>本社</th>
              <td>石川県金沢市京町20番41号</td>
            </tr>
            <tr>
              <th>支店</th>
              <td>東京都渋谷区本町3丁目38番1号</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>
                ショートドラマ制作 / マーケティングコンサルティング /
                映像制作 / AI支援
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
  )
}
