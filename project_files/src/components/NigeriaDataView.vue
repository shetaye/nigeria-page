<template>
  <v-container >
    <v-layout row align-center justify-center>
      <v-flex xs9>
        <v-card>
          <v-card-text>
            <div class="text-xs-center display-3">Nigeria</div>
            <div class="text-xs-center subheading">Joseph Shetaye and Robert Holzman</div>
            <v-container>
              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-2">Population</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="population_size" description="Population - 2018"/>
                <number :number="`${population_growth}%`" description="Population growth - 2018"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="immigration" description="Immigration rate"/>
                <number :number="emmigration" description="Emmigration rate"/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Age</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between>
               <v-flex xs5>
                <v-img :src="photo_pop_pyramid_src"
                  max-width="500"
                  max-height="500"/>
                <div class="text-xs-center">{{photo_pop_pyramid_desc}}</div>
                </v-flex>
                <pie-graph name="age_groups" :labels="age_pie_labels" :data="age_pie_data" description="Age groups"/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Poverty</div>
                </v-flex>
              </v-layout>
              <v-layout column align-center justify-space-between pt-5 pb-2>
                <number-big :number="`${below_poverty_line}%`" description="of the country is below the poverty line,"/>
              </v-layout>
              <v-layout column align-center justify-space-between pb-5 pt-2>
                <number-big :number="lifespan" description_top="and people on average live" description="years."/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="`${literacy_rate}%`" description_top="Roughly" description="of Nigeria is literate"/>
                <number :number="education_years" description_top="People receive" description="years of schooling"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="hdi" description="HDI"/>
                <number :number="`${hdi_ranking}th`" description="HDI Ranking"/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-2">Economics</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <span>
                  <numberBig :number="`$${ppp_capita_gdp}`" description="GDP per capita adjusted for PPP - 2017"/>
                  <numberBig :number="`$${ppp_gdp}`" description="GDP adjusted for PPP - 2017"/>
                </span>
                <pie-graph name="sector_gdp_share" :labels="sector_gdp_pie_labels" :data="sector_gdp_pie_data" description="Each sector's share of the GDP"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <pie-graph name="sector_worker_share" :labels="sector_worker_pie_labels" :data="sector_worker_pie_data" description="Each sector's share of the worker population"/>
                <v-flex>
                  <div class="subheading text-xs-center">
                    Major Industries:
                    <ul style="list-style-type: none;">
                      <li v-for="(industry, index) in major_industries" :key="index">
                        {{ industry }}
                      </li>
                    </ul>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout column align-center justify-space-between pb-5 pt-2>
                <pie-graph name="agricultural_land_use" :labels="agricultural_use_pie_labels" :data="agricultural_use_pie_data" description="Agricultural land use."/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Inequality</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="gini_index" description="Gini Index"/>
                <number :number="gini_rating" description="Gini Index Rating"/>
              </v-layout>
              <v-layout column align-center justify-space-between pb-5 pt-2>
                <bar-graph name="household_income" label="Household Income Distribution - Top and Bottom 10%" :labels="household_bar_labels" :data="household_bar_data" description=""/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-2">Politics</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="freedom_level" description="Level of Freedom"/>
                <number :number="`${democracy_level}/10 (Hybrid Regime)`" description_top="" description="Democracy Level"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="political_rights" description="Political Rights"/>
                <number :number="civil_liberties" description="Civil Liberties"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <v-flex xs5>
                  <v-img :src="photo_pol_divisions_src"
                    max-width="500"
                    max-height="500"/>
                  <div class="text-xs-center">{{photo_pol_divisions_desc}}</div>
                </v-flex>
                <number :number="`${transparency}`" description="Transparency Rating (Corruption)"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-2>
                <v-flex>
                  <div class="text-xs-center display-1">Important Government Photos</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <v-flex xs3>
                  <v-img :src="photo_a_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_a_desc}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="photo_b_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_b_desc}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="photo_c_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_c_desc}}</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <v-flex xs3>
                  <v-img :src="photo_d_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_d_desc}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="photo_e_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_e_desc}}</div>
                </v-flex>
                <v-flex xs3>
                  <v-img :src="photo_f_src"
                    max-width="300"
                    max-height="300"/>
                  <div class="text-xs-center">{{photo_f_desc}}</div>
                </v-flex>
              </v-layout>
              <v-layout column align-center justify-space-between pb-5 pt-2>
                <v-flex xs5>
                  <div class="display-1">Suffrage:</div>
                  <div class="display-1"><b>18 Years Old, Universal</b></div>
                </v-flex>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Women</div>
                </v-flex>
              </v-layout>
              <v-layout column align-center justify-space-between py-5>
                <numberBig :number="`${women_legislature}%`" description="of the legislature constists of women"/>
              </v-layout>
              <v-layout column align-center justify-space-between py-5>
                <numberBig :number="women_suffrage" description="Year women gained suffrage."/>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Cleavages</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <v-flex xs5>
                  <v-img :src="photo_ethnic_divisions_src"
                    max-width="500"
                    max-height="500"/>
                  <div class="text-xs-center">{{photo_ethnic_divisions_desc}}</div>
                </v-flex>
                <pie-graph name="ethnic_groups" :labels="ethnic_groups_pie_labels" :data="ethnic_groups_pie_data" description="Ethnic groups"/>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <pie-graph name="religious_groups" :labels="religious_groups_pie_labels" :data="religious_groups_pie_data" description="Religious groups"/>
                <v-flex xs5>
                  <v-img :src="photo_religious_divisions_src"
                    max-width="500"
                    max-height="500"/>
                  <div class="text-xs-center">{{photo_religious_divisions_desc}}</div>
                </v-flex>
              </v-layout>

              <v-layout row align-center justify-space-between>
                <v-flex>
                  <div class="text-xs-center display-1">Other Data</div>
                </v-flex>
              </v-layout>
              <v-layout row align-center justify-space-between py-5>
                <number :number="`${oil_export_ratio}%`" description_top="Oil makes up" description="of Nigerian exports."/>
                <number :number="`${oil_refinery_ratio}%`" description_top="Nigeria has enough refineries to process" description="of the oil it makes"/>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Number from '@/components/Number'
import NumberBig from '@/components/NumberBig'
import PieGraph from '@/components/PieGraph'
import BarGraph from '@/components/BarGraph'

export default {
  name: "NigeriaDataView",
  data() {
    return {
      // TODO: add detail to vague descriptions (Freedom rating),
      // add immigration and emmigration rates
      population_size: '203,452,505',
      population_growth: 2.54,
      immigration: 0,
      emmigration: 0,
      age_pie_labels: ['0-14 Years', '15-24 Years', '25-54 Years', '55-64 Years', '65 Years and Older'],
      age_pie_data: [42.45, 19.81, 30.44, 4.04, 3.26],
      below_poverty_line: 70,
      literacy_rate: 59.6,
      lifespan: 59.3,
      education_years: 9,
      hdi: 0.532,
      hdi_ranking: 157,
      ppp_capita_gdp: '5,933.3',
      ppp_gdp: '1.121Trillion',
      sector_gdp_pie_labels: ['Primary', 'Secondary', 'Tertiary'],
      sector_gdp_pie_data: [21.1, 19.4, 59.5],
      sector_worker_pie_labels: ['Primary', 'Secondary', 'Tertiary'],
      sector_worker_pie_data: [70, 10, 20],
      major_industries: ['crude oil', 'coal', 'tin', 'columbite', 'rubber products', 'wood', 'hides and skins', 'textiles', 
      'cement and other construction materials', 'food products', 'footwear', 'chemicals', 'fertilizer', 'printing', 'ceramics', 'steel'],
      agricultural_use_pie_labels: ['Arable Land', 'Permanent Crops', 'Permanent Pasture'],
      agricultural_use_pie_data: [37.3, 7.4, 33.3],
      gini_index: 48.8,
      gini_rating: 21,
      household_bar_labels: ['Lowest 10%', 'Highest 10%'],
      household_bar_data: [1.8, 38.2],
      freedom_level: 'Partly Freed',
      democracy_level: 4.5,
      political_rights: 4,
      civil_liberties: 4,
      transparency: 27,
      women_legislature: 6,
      women_suffrage: 1958,
      ethnic_groups_pie_labels: ['Hausa', 'Igbo(Ibo)', 'Yoruba', 'Fulani', 'Tiv', 'Ibibio', 'Ijaw/Izon', 'Kanuri/Beriberi', 'Igala', 'other', 'unspecified'],
      ethnic_groups_pie_data: [27.4, 14.1, 13.9, 6.3, 2.2, 2.2, 2, 1.7, 1, 28.9, 0.2],
      religious_groups_pie_labels: ['Muslim', 'Roman Catholic', 'other Christian', 'traditionalist', 'unspecified'],
      religious_groups_pie_data: [51.6, 11.2, 35.7, 0.9, 0.5],
      oil_export_ratio: Math.round((38607000000/46680000000)*100),
      oil_refinery_ratio: Math.round((446000/1535000)*100),
      photo_pop_pyramid_desc: 'Population Pyramid of Nigeria - CIA World Factbook',
      photo_pop_pyramid_src: require('@/assets/population_pyramid.jpg'),
      photo_pol_divisions_desc: 'Political Divisions of Nigeria - http://ontheworldmap.com/',
      photo_pol_divisions_src: require('@/assets/political_divisions.jpg'),
      photo_ethnic_divisions_desc: 'Ethnic Divisions of Nigeria - https://www.nairaland.com/',
      photo_ethnic_divisions_src: require('@/assets/ethnic_divisions.jpg'),
      photo_religious_divisions_desc: 'Religious Divisions of Nigeria - http://vivilia.mywikis.com/religions',
      photo_religious_divisions_src: require('@/assets/religious_divisions.png'),
      photo_a_desc: 'President - Wikimedia',
      photo_a_src: require('@/assets/president.jpg'),
      photo_b_desc: 'President of the Senate - https://twitter.com',
      photo_b_src: require('@/assets/president_senate.jpg'),
      photo_c_desc: 'Speaker of the House - https://tribuneonlineng.com/',
      photo_c_src: require('@/assets/speaker_house.jpg'),
      photo_d_desc: 'Nigeria\'s National Assembly Building - Wikimedia',
      photo_d_src: require('@/assets/national_assembly.jpg'),
      photo_e_desc: 'Aso Villa, Presidential Residence - https://www.abuja-ng.com',
      photo_e_src: require('@/assets/aso_rock.jpg'),
      photo_f_desc: 'Supreme Court Complex, Abuja - https://discoverafricanews.com',
      photo_f_src: require('@/assets/supreme_court_complex.jpg'),
    }
  },
  components: {
    Number,
    PieGraph,
    NumberBig,
    BarGraph
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  font-family: 'Oswald', sans-serif;
}
</style>
