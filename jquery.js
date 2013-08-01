$(document).ready(function(){
	var embedn=1;
	fields = ['customer_manifesting_link_li','support_manifesting_link_li','eng_tool_link_li'];
	var provider_id,account_login,account_type,embed_code,escalation_form,customer_manifesting_link,support_manifesting_link,engineering_tools_link,prerequisites,steps_to_reproduce,actual_results,expected_results,observations,manifesting_devices,player_platform,ad_tag;
	$('#escalation_fields li').hide();
	showFields(fields);
	
	function gatherInfo(){

	};

	function generateForm(){

	};

	function getEmbedCodes(){
		var ecodes = [];
		for (i=1;i<=embedn;i++){
			//ecodes[i-1]=$("#embed"+i).val();
			ecodes+="\n" + $("#embed"+i).val();
		}
		return ecodes;
	};

	function removeEmbedInput(){
		for(i=2;i<=embedn;i++){
			$("#embed"+i).remove();
		}
		embedn=1;
	};

	function changeOption(val){
		switch (val){
			case "general":
				fields = ['customer_manifesting_link_li','support_manifesting_link_li','eng_tool_link_li'];
				showFields(fields);
			break;
			
			case "pbissue":
				fields = ['customer_manifesting_link_li','support_manifesting_link_li','manifesting_devices_li','player_platform_li','eng_tool_link_li','player_logs_li'];
				showFields(fields);
			break;
			
			case "pbsdk":
				fields = ['sample_sdk_li','manifesting_devices_li'];
				showFields(fields);
			break;
			
			case "pbperformance":
				fields = ['customer_manifesting_link_li','support_manifesting_link_li','eng_tool_link_li','manifesting_devices_li','player_platform_li','manifesting_devices_li'];
				showFields(fields);
			break;
			
			case "pbmonetization":
				fields = ['customer_manifesting_link_li','support_manifesting_link_li','eng_tool_link_li','manifesting_devices_li','player_platform_li','manifesting_devices_li'];
				showFields(fields);
			break
		}
	};
	
	function showFields(ar){
		$.each(ar,function(index,value){
			console.log($(value));
			$('#' + value).show();
		})
	}

	//BUTTON ACTIONS

	$('#escalation_form').change(function(){
		value = $(this).val();
		$('#escalation_fields li').hide();
		changeOption(value);
	});

	$("#btngen").live("click",function(){
		gatherInfo();
		generateForm();
	});
	$("#btnclean").on("click",function(){
		removeEmbedInput();
	});
	$("#addbtn").live("click",function(){
		var e = $(document.createElement('input'));
		embedn++;
		e.attr('id','embed'+embedn);
		e.attr('class','embedta');
		$("#embedca").append(e);
	});

});