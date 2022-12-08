import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { baseApi } from '../base';

const homePageApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTestRequests: build.query<any, {}>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {

        const firstPartPromises = [
          fetchWithBQ(
            '/kp/domain/items/configuration/navigation_management_poc?depth=5&desiredLanguage=en-id&filterByLanguage=en-id&system.workflow_step%5Bin%5D=draft%2Cpublished&elements=global_navigation%2Cmain_navigation%2Cpinned_items%2Cpromotional_item%2Cglobal_editions%2Cfollow_us%2Cdownload_our_apps%2Csupport%2Cside_menu___main_navigation%2Cside_menu___other_sports%2Cside_menu___promotional_item%2Cother_sports%2Cdisplay_on%2Citem_logo%2Citem_logo_active%2Cinactive_item_logo_mobile%2Credirection_target%2Credirection_url%2Credirection_pop_up_text%2Ctitle%2Curl_slug%2Cad_unit%2Ctext%2Cimages%2Cmodular_content%2Ccodesnippet%2Ctag_type%2Ctemplate%2Cpage_template%2Cheader_image%2Cheader_logo%2Ctabs%2Ctitle%2Ctab_url_slug%2Csocial_network_name%2Clink_url%2Cicon_white%2Cicon_colored%2Csupport%2Cimage%2Cdisplay_name%2Cstatus%2Cshort_name%2Curl_slug%2Ccompetition_logo%2Ccopyright%2Ccompetition%2Cdisplay_name%2Cshort_name%2Cgender%2Curl_slug%2Ccompetition_logo%2Cstats_section%2Cstats_section__opta_sd_name%2Cstats_section__opta_sd_id%2Cstats_section__opta_sd_season_id%2Cstats_section__opta_id%2Cstats_section__opta_season%2Csport%2Cdisplay_name%2Cstatus%2Cshort_name%2Curl_slug%2Cseo%2Cseo__meta_description%2Cseo__meta_description%2Cseo__og_title%2Cseo__page_title%2Cseo__og_image%2Cad_block%2Cad_codename%2Cview_port%2Cdesktop%2Cmobile%2Ctablet%2Cposition'
          ),
          fetchWithBQ(
            '/kp/domain/items/page/page___home?depth=4&desiredLanguage=en-id&filterByLanguage=en-id&system.workflow_step%5Bin%5D=draft%2Cpublished&elements=page_template%2Cmain_blocks%2Cright_blocks%2Ctitle%2Ccompetitionslogo_manager%2Clogo_manager__logo%2Cseo%2Cseo__meta_description%2Cseo__meta_description%2Cseo__og_title%2Cseo__page_title%2Cseo__og_image%2Cmobile_image_orientation%2Ctags_generator%2Ctags_generator__main%2Ctags_generator__other%2Cnumber_of_items%2Ccontent_type%2Cad_block%2Cad_codename%2Cview_port%2Cdesktop%2Cmobile%2Ctablet%2Cposition%2Cnumber_of_items%2Cnumber_of_items_in_the_bottom_section%2Citems_in_the_bottom_section%2Citems_in_the_top_section%2Clinked_competition%2Cseo'
          )
        ]

        const result = await Promise.all(firstPartPromises);

        const secondPartPromises = [
          fetchWithBQ(
            '/kp/domain/items/article?depth=2&limit=6&desiredLanguage=en-id&filterByLanguage=en-id&system.workflow_step%5Bin%5D=draft%2Cpublished&order=elements.publication_date%5Bdesc%5D&elements=title%2Csubtitle%2Cteaser%2Cpublication_date%2Ctype%2Curl_slug%2Cauthor%2Cexternal_author%2Chero_image_manager%2Chero_image_manager__element%2Cvideo_manager%2Cvideo_manager__video_manager%2Ctags_generator%2Ctags_generator__main%2Ctags_generator__other'
          ),
          fetchWithBQ(
            '/kp/domain/items/article?depth=2&limit=3&desiredLanguage=en-id&filterByLanguage=en-id&system.workflow_step%5Bin%5D=draft%2Cpublished&order=elements.publication_date%5Bdesc%5D&elements=title%2Csubtitle%2Cteaser%2Cpublication_date%2Ctype%2Curl_slug%2Cauthor%2Cexternal_author%2Chero_image_manager%2Chero_image_manager__element%2Cvideo_manager%2Cvideo_manager__video_manager%2Ctags_generator%2Ctags_generator__main%2Ctags_generator__other&elements.tags_generator__main%5Ball%5D=f179ed4d-2cbd-4c03-a820-c055efb9ab67%2C908f0869-f20b-55d1-9fc4-3d16196adac0%2C357c5bd0-0a1f-43cf-930f-5e531b56c51e%2C44e43ceb-0893-557d-9123-7777b863f5a3%2Cb48d86c3-5a33-5842-9a90-f4c126c56313%2C341e5e24-f68b-51ff-a60a-44f9a1e1cf6b'
          )
        ]

        await Promise.all(secondPartPromises);
        
        if (result[0].error) throw result[0].error;

        const data = firstPartPromises;
        console.log({data})

        return result[0].data
          ? { data: result[0].data }
          : { error: result[0].error as unknown as FetchBaseQueryError };
      }
    })
  }),
  overrideExisting: false
});

export const { useGetTestRequestsQuery, endpoints } = homePageApi;

export const { getTestRequests } = endpoints;
